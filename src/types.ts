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
