/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    YourContract: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "appointmentId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "startTime",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "endTime",
              type: "uint256",
            },
          ],
          name: "AppointmentCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "renter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "startTime",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "endTime",
              type: "uint256",
            },
          ],
          name: "ChargerBooked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "pricePerHour",
              type: "uint256",
            },
          ],
          name: "ChargerListed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
          ],
          name: "ChargerReleased",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "renter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "startTime",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "endTime",
              type: "uint256",
            },
          ],
          name: "ChargerRented",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
          ],
          name: "ChargerStatusChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "PaymentReceived",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "numHours",
              type: "uint256",
            },
          ],
          name: "bookCharger",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "chargers",
          outputs: [
            {
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
            {
              internalType: "address payable",
              name: "chargerOwner",
              type: "address",
            },
            {
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "pricePerHour",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "available",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "appointmentsCount",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chargersCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "appointmentId",
              type: "uint256",
            },
          ],
          name: "getAppointmentDetails",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "renter",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "startTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endTime",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "greeting",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "pricePerHour",
              type: "uint256",
            },
          ],
          name: "listCharger",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
          ],
          name: "setChargerInactive",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
  84532: {
    YourContract: {
      address: "0x14D78cF53Ddf62Dbc68A4AE03D55dD275cDb156D",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "appointmentId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "startTime",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "endTime",
              type: "uint256",
            },
          ],
          name: "AppointmentCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "renter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "startTime",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "endTime",
              type: "uint256",
            },
          ],
          name: "ChargerBooked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "pricePerHour",
              type: "uint256",
            },
          ],
          name: "ChargerListed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
          ],
          name: "ChargerReleased",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "renter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "startTime",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "endTime",
              type: "uint256",
            },
          ],
          name: "ChargerRented",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
          ],
          name: "ChargerStatusChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "PaymentReceived",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "numHours",
              type: "uint256",
            },
          ],
          name: "bookCharger",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "chargers",
          outputs: [
            {
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
            {
              internalType: "address payable",
              name: "chargerOwner",
              type: "address",
            },
            {
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "pricePerHour",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "available",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "appointmentsCount",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "chargersCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "appointmentId",
              type: "uint256",
            },
          ],
          name: "getAppointmentDetails",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "renter",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "startTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endTime",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "greeting",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "location",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "pricePerHour",
              type: "uint256",
            },
          ],
          name: "listCharger",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "chargerId",
              type: "uint256",
            },
          ],
          name: "setChargerInactive",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
