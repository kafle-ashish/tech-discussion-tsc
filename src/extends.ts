class Dept{
    name?: string;
}

class Tech extends Dept{

}

/**
 * extends creates a rigid meta type 
 */

function processOnlyDeptExtends<T extends Dept>(dept: T) {
    if (dept instanceof Dept) {
        return "Hi";
    }
    throw new Error();
}

// processOnlyDeptExtends("Hi");
processOnlyDeptExtends({name: "Ashish"});
processOnlyDeptExtends(new Tech());