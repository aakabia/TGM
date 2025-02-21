import emailJs from "@emailjs/browser";




export const sendEmail = (params, toast,reset,templetID ) => {
    
 

  const toastId = toast.loading("Sending your meassage, please wait...");

    // toast from sonner to render loading first when send email is invoked

    emailJs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        templetID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_API_KEY,
          limitRate: {
            throttle: 30000, // you can not send more than 1 email per 5 seconds
          },
        }
      )
      // Above is our emailJs.send confuction that we config with our env variables
      // since we are already collecting data from the form with reack hook form we can use send instead of sendForm
      // check docs at https://www.emailjs.com/docs/examples/reactjs/
      
      .then(
        () => {
          toast.success("I have recieved your message, thank you very much!", {
            id: toastId,
          });
          reset();

          // Above renders our success message if the email goes through
          // then clears our loading id by passing a second argument as a object
          // last we reset the form
        },
        (error) => {
          toast.error(
            "There was an error sending your message, please try again later!",
            {
              id: toastId,
            }
          );
        }
        // Above renders our error message if the email does not go through
      );
  };


  // Our Send email function takes in email params a toast id and reset function in order to send a email and display a message back to the user and clear the form.