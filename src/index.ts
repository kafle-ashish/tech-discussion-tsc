interface Profile {
    name?: string;
    email?: string;
    partner?: Profile | null;
  }
  
  // types
  const record: Record<string, string> = {};
  
  // const record: Record<string, Profile> = {
  //   manager: {}
  // };
  
  const User = {
    name: "Ashish",
    email: "ashish@mail.com"
  };
  
  // type TUser = typeof User;
  
  // function checkIfUserHasPartner(user:TUser) {
  //   return !!user?.partner;
  // }
  
  type TUser = typeof User & { partner?: Profile };
  
  function checkIfUserHasPartner(user: TUser) {
    return !!user?.partner;
  }
  
  // function isValid(str: string): boolean {
  //   return str === "Ashish";
  // }
  
  function isValid(str: any): str is TUser {
    return "name" in str && "email" in str;
  }
  
  const validity = isValid(User);
  