

export const isValidtoken = (token) => {
   if(!token) {
    return  false;
   }
   
   const payload = token.split('.')[1];
   if(!payload) {
    return false;
   }

   const decodedPayload = JSON.parse(window.atob(payload));

   const expiry = decodedPayload.expiry * 1000;
   const currentTime = Date.now();
   return expiry > currentTime;

}
