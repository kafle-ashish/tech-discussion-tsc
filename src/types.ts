/**
 * Records are basically objects.
 * It's a type for key value pairs
 */
const record: Record<string | number | symbol, any> = {};

interface Profile {
    name?: string;
    email?: string;
}

type TNestedRecord = Record<number, Profile>;

/**
 * Types can be extended to make more complex types
 * Can interfaces do the same?
 * Hint: Classes or known objects.
 */

type ExtendedType = Profile[] | TNestedRecord[];

/**
 * 
 * Merging Types
 */
interface DobDetails {
    place: string;
    date: Date;
}

type DobProfile = DobDetails & Profile;
// type DobProfile = DobDetails & Profile & { time: string };

// const dobProfile:DobProfile = {}

/**
 * let's discuss null and undefined.
 * Which one is object and which one is not?
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
 */

const SOME_CONST = {
    NAME: "ASHISH",
    EMAIL: "SOMEEMAIL",
    // let's say 100 more fields.
    // Fields might be added.
    // Inteface maintainance can be cumbersome.
} as const;
// Why are we using as const?
// as const makes the object readonly
// The const keyword ensures that no reassignment to the variable can happen, 
// and a strict type of only that literal is guaranteed.
// A const assertion tells the compiler to infer the narrowest or most specific type it can for an expression

// const TEST = {TEST: "TEST"};
// TEST.TEST = "hi";
// SOME_CONST.NAME = ""

type ConstType =  typeof SOME_CONST;
type ConstKeys = keyof ConstType;

// We might have some constants in our codebase.
// Let's say we have a function that takes only key of the constant
function processConst(constKey:unknown){
    // How to we fix this?
    console.log(SOME_CONST[constKey])
}

// function processConst(constKey:ConstKeys){
//     // Fixed
//     console.log(SOME_CONST[constKey])
// }

// We might need only values of SOME_CONST
type ConstValues = typeof SOME_CONST[ConstKeys]

function processConstValues(constKey:ConstValues){
    // How to we fix this?
    if(constKey === "ASHISH") {

    }
}