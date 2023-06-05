class Dept{
    name?: string;
}

class Tech extends Dept{

}

/**
 * extends creates a rigid meta type 
 */

function processOnlyDeptExtends<T>(args: T): T {
    // if (dept instanceof Dept) {
    //     return "Hi";
    // }
    throw new Error();
}

// processOnlyDeptExtends("Hi");
processOnlyDeptExtends<Dept>({name: "Ashish"});
processOnlyDeptExtends(new Tech());
processOnlyDeptExtends<string>("");