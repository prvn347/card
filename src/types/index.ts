interface Name {
    title: string;
    first: string;
    last: string;
  }
  
  interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
  }
  
  interface UserResult {
    gender: string;
    name: Name;
    email: string;
    picture: Picture;
  }
  
  export interface ApiResponse {
    results: UserResult[];
   
  }