// import { Form } from "react-router";
// import type { Route } from "./+types";

// export async function action({request}: Route.ActionArgs){
//     const formData = await request.formData();
    
//     const email = formData.get('email') as string;
//     const subject = formData.get('subject') as string;
//     const name = formData.get('name') as string;
//     const message = formData.get('message') as string;

//     const errors:Record<string,string> = {};

//     if (!name) errors.name = 'Name is required!'

//     if (!email) {
//       errors.email = 'Email is required!'
//     } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
//       errors.email = 'Invalid Email Format!'
//     }

//     if (!subject) errors.subject = 'Subject is required!';

//     if(!message) errors.message = 'Message is required!';

//     if(Object.keys(errors).length > 0){
//       return {errors}
//     }

//     const data = {email, subject, name, message}

//     return {message: "Form submitted succesfully!", data}
// } 

const ContactPage = () => {

  // const errors = actionData?.errors || {};

  return (
    <div className="mt-30 flex items-center justify-center flex-col w-full">
      <h1 className="text-white font-bold text-3xl my-3">Let's Get In Touch 📞</h1>

      <div className="flex flex-col justify-between items-center w-[80%] my-5 md:flex-row">
        {/* Contact Form */}
        <form 
        method="POST" 
        className="w-[100%] order-2 md:order-1 md:w-[50%] bg-black border border-white rounded-lg p-4"
        action={`https://formspree.io/f/mldlojwa`}
        >
          {/* {actionData?.message && actionData.data.email && actionData.data.subject && actionData.data.name && actionData.data.message 
          ? (<h1 className="bg-green-500 text-white rounded-lg w-full p-3 font-medium text-lg">{actionData.message}</h1>)
          : null} */}

          <div className="flex flex-col my-2">
            <label htmlFor="name" className="text-white">Name</label>
            <input 
            type="text" 
            className="py-2 px-4 rounded border border-gray-300 w-full"
            name="name"
            id="name"
             />
             {/* {errors.name && <p className="text-sm text-red-400 mt-1">{errors.name}</p>} */}
          </div>

          <div className="flex flex-col my-3">
            <label htmlFor="email" className="text-white">Email</label>
            <input type="email" 
            className="py-2 px-4 rounded border border-gray-300 w-full" 
            name="email"
            id="email"
            />
            {/* {errors.email && <p className="text-sm text-red-400 mt-1">{errors.email}</p>} */}
          </div>

          <div className="flex flex-col my-3">
            <label htmlFor="subject" className="text-white">Subject</label>
            <input type="text" 
            className="py-2 px-4 rounded border border-gray-300 w-full" 
            name="subject"
            id="subject"
            />
            {/* {errors.subject && <p className="text-sm text-red-400 mt-1">{errors.subject}</p>} */}
          </div>
          <div className="flex flex-col my-3">
            <label htmlFor="message" className="text-white">Message</label>
            <textarea 
            className="py-2 px-4 rounded border border-gray-300 w-full" 
            name="message"
            id="message"
            />
            {/* {errors.message && <p className="text-sm text-red-400 mt-1">{errors.message}</p>} */}
          </div>

          <button 
          className="py-2 px-2 rounded bg-green-500 text-white text-lg transition w-full text-center hover:bg-green-600"
          type="submit"
          >
            Submit
          </button>
        </form>

        {/* Form Display */}
        <div className="">
          <img src="../public/contact-image.png" className="size-70 order-1 md:order-2" alt="" />
        </div>
      </div>
    </div>
  )
}
export default ContactPage