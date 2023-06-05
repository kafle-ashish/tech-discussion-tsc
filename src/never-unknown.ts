// Use never in positions where there will not or should not be a value
// Use unknown where there will be a value, but it might have any type

function flattenUnknown(value: Record<any, any>): string;
function flattenUnknown(value: number): number;
function flattenUnknown(value: boolean): string;
function flattenUnknown(value: any): string;

// function flattenUnknown(value: unknown) {
//     switch(typeof value) {
//         case "boolean":
//             return `${value}`
//         case "object":
//             return Object.keys(value).reduce(
//                 (acc, current) => {
//                   acc += `${current} : ${value[current]} `
//                   return acc;
//                 },
//                 ""
//               )
//         case "function":
//             return (value as Function).name;
//         default:
//             return value;
//     }
// }

// typeof null === "object"

function flattenUnknown(value: unknown) {
    if (value === null) {
        throw new Error("Won't flatten null");
    }

    switch (typeof value) {
        case "boolean":
            return `${value}`
        case "object":
            return Object.keys(value).reduce(
                (acc, current) => {
                    acc += `${current} : ${value[(current as keyof typeof value)]} `
                    return acc;
                },
                ""
            )
        case "function":
            return (value as Function).name;
        case "undefined":
            return "Are you using ts-ignore in some way?"
        default:
            return value;
    }
}

// Alt + up or down
const unknownFlatNum = flattenUnknown(1);
const unknownFlatBoolean = flattenUnknown(true);
const unknownFlatObject = flattenUnknown({ name: "Ashish" });
const unknownFlatString = flattenUnknown("Ashish");


// This won't throw an error. Hint: We're overriding lint rules
// Avoid this as much as possible. You're being lazy if using ts-ignore
// // @ts-ignore
// console.log(flattenUnknown();)

// This will throw an error. Hint: function overrides
// flattenUnknown();

/**
 * Never example
 */

// function server(): never {
//     while (true) {
//         console.log("Server listening")
//     }
// }

// server();

