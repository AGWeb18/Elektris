import React, { useMemo, useState } from "react";
import { Charger } from "../app/interfaces/ChargerInterface";
import { addHours, format, setHours, setMinutes } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CheckoutComponent from "~~/components/CheckoutComponent";

interface ModalComponentProps {
  isVisible: boolean;
  onClose: () => void;
  charger: Charger | null;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isVisible, onClose, charger }) => {
  const [numHours, setNumHours] = useState<number>(1);
  const [startDate, setStartDate] = useState<Date>(new Date()); // Initialized to a new Date object
  const [transactionMessage, setTransactionMessage] = useState<string>("");

  // This function will update when the user selects a start time
  const handleDateChange = (date: Date | null) => {
    setStartDate(date || new Date()); // Fallback to a new Date if null
  };

  const handleHourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumHours(parseInt(event.target.value, 10));
  };

  const [minTime, maxTime] = useMemo(() => {
    // Ensure startDate is a valid date object
    const validStartDate = startDate || new Date();
    const startOfDay = setHours(setMinutes(validStartDate, 0), 0);

    // Ensure that charger is not null and openHour and closeHour are defined
    if (charger && charger.open_hour !== undefined && charger.close_hour !== undefined) {
      return [setHours(startOfDay, charger.open_hour), setHours(startOfDay, charger.close_hour - numHours)];
    }
    // Return default times if charger is null or openHour/closeHour are not defined
    return [setHours(startOfDay, 0), setHours(startOfDay, 24 - numHours)];
  }, [charger, numHours, startDate]);

  const startTime = startDate ? format(startDate, "HH:mm") : "";
  const endTime = startDate ? format(addHours(startDate, numHours), "HH:mm") : "";
  const totalCost = charger ? parseFloat(charger.pricePerHour) * numHours : 0;

  if (!isVisible || charger === null) return null;

  return (
    <dialog open className="modal rounded-lg bg-blend-overlay bg-secondary bg-opacity-75">
      <div className="modal-box w-1/2 relative bg-white rounded-lg shadow-xl overflow-hidden">
        <button type="button" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={onClose}>
          ✕
        </button>

        <div className="px-2 bg-primary text-white">
          <div className="flex flex-wrap items-center text-sm">
            <h3 className="font-bold flex-shrink-0">{charger.location_name}</h3>
            <p className="font-bold flex-shrink-0">{`$${charger.pricePerHour} per hour`}</p>
            <p className="font-bold flex-shrink-0">{`Available from ${charger.open_hour}:00 to ${charger.close_hour}:00`}</p>
            <p className="font-bold flex-shrink-0">{`Hosted by User ID: ${charger.user_id.slice(13, 19)}`}</p>
          </div>
        </div>

        <div className="p-2">
          <div className="mt-1">
            <label htmlFor="numHours" className=" mb-1 block text-sm font-medium text-gray-700">
              {`Duration (hours): ${numHours}`}
            </label>
            <input
              id="numHours"
              type="range"
              min="1"
              max="5"
              onChange={handleHourChange}
              value={numHours}
              className="range range-primary range-lg w-full h-6"
              step="1"
            />
            <div className="w-full flex justify-between text-xs px-2">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="datepicker" className="block text-sm font-medium text-gray-700">
              Select Date and Start Time:
            </label>
            <div className="flex w-full h-full justify-center mt-1">
              <DatePicker
                id="startTimePicker"
                selected={startDate}
                onChange={handleDateChange}
                showTimeSelect
                inline // This will make the calendar always visible
                timeFormat="HH:mm"
                timeIntervals={15} // Show time in intervals of 15 minutes
                timeCaption="Time"
                dateFormat="MMMM d, yyyy h:mm aa" // Format for displaying date and time
                className="form-input w-full rounded-xl border-2"
              />
            </div>
          </div>

          {/* Sticky footer for total cost and checkout action */}
          <div className="mt-4 bg-white pt-4 sticky bottom-0">
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <p className="text-md font-semibold text-accent">Total Cost:</p>
                <p className="text-lg font-bold text-accent">{`$${totalCost.toFixed(2)}`}</p>
              </div>
              <div className="modal-action">
                <CheckoutComponent />
              </div>
            </div>
          </div>
        </div>

        {transactionMessage && (
          <div
            className={`alert ${
              transactionMessage.includes("failed") ? "alert-error" : "alert-success"
            } rounded-md mt-4 p-3`}
          >
            {transactionMessage}
          </div>
        )}
      </div>
    </dialog>
  );
};

export default ModalComponent;