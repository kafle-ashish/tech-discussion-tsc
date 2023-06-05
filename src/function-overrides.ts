/**
 * Hint: Class method overrides in OOP.
 */
function flatten(value: Record<any, any>): string;
function flatten(value: number): number;
function flatten(value: boolean): string;
function flatten(value: any): string;

function flatten(value: any) {
    switch(typeof value) {
        case "boolean":
            return `${value}`
        case "object":
            return Object.keys(value).reduce(
                (acc, current) => {
                  acc += `${current} : ${value[current]} `
                  return acc;
                },
                ""
              )
        case "function":
            return (value as Function).name;
        default:
            return value;
    }
}

const flatNum = flatten(1);
const flatBoolean = flatten(true);
const flatObject = flatten({ name: "Ashish" });
const flatString = flatten("Ashish");
