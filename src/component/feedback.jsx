import { useState } from "react";
import { postFeedback } from "../api/information";

const Feedback = () => {
  const [body, setBody] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [alert, setAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [loadForm, setLoadForm] = useState(false);

  const handleValidation = () => {
    const { name, email, phone, subject, message } = body;
    setError({ name: "", email: "", phone: "", subject: "", message: "" });
    if (!name || !email || !phone || !subject || !message) {
      if (!name) setError((prev) => ({ ...prev, name: "Name is required." }));
      if (!email)
        setError((prev) => ({ ...prev, email: "Email is required." }));
      if (!phone)
        setError((prev) => ({ ...prev, phone: "Phone is required." }));
      if (!subject)
        setError((prev) => ({ ...prev, subject: "Subject is required." }));
      if (!message)
        setError((prev) => ({ ...prev, message: "Message is required." }));
      return false;
    }
    // Simple email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadForm(true);
    let isValid = await handleValidation();
    if (isValid) {
      let bodyForm = new FormData();
      bodyForm.append("your-name", body.name);
      bodyForm.append("your-email", body.email);
      bodyForm.append("your-telephone", body.phone);
      bodyForm.append("your-subject", body.subject);
      bodyForm.append("your-message", body.message);
      bodyForm.append("_wpcf7_unit_tag", "wpcf7-f123-p456-o1");

      const result = await postFeedback(bodyForm);
      try {
        setShowAlert(true);
        setBody({ name: "", email: "", phone: "", subject: "", message: "" });
        setAlert(result.message);
        setTimeout(() => {
          setShowAlert(false);
        }, 15000);
        setLoadForm(false);
      } catch (err) {
        setShowAlert(true);
        setAlert("Error Occured!");
        setTimeout(() => {
          setShowAlert(false);
        }, 15000);
        setLoadForm(false);
      }
    } else {
      setLoadForm(false);
    }
  };

  return (
    <div className="my-5 border-2 border-[#dbbc42] rounded-xl p-5">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex gap-5 py-2">
          <input
            type="text"
            value={body.name}
            className="rounded-xl px-5 py-1 bg-transparent border border-[#545454] w-full"
            placeholder="Isi Nama Anda"
            onChange={(e) => {
              setBody({ ...body, name: e.target.value });
              setError({ ...error, name: "" });
            }}
          />
        </div>
        {error.name && (
          <div className="text-[#C01C30] pb-2 text-sm text-left">
            {error.name}
          </div>
        )}
        <div className="flex flex-wrap lg:flex-nowrap gap-2 lg:gap-5 py-2">
          <div className="flex w-full lg:w-1/2">
            <div className="w-full">
              <input
                type="email"
                name="email"
                value={body.email}
                className="rounded-xl px-5 py-1 bg-transparent border border-[#545454] w-full"
                placeholder="Isi Email Anda"
                onChange={(e) => {
                  setBody({ ...body, email: e.target.value });
                  setError({ ...error, email: "" });
                }}
              />
              {error.email && (
                <div className="text-[#C01C30] pt-2 text-sm text-left">
                  {error.email}
                </div>
              )}
            </div>
          </div>
          <div className="flex w-full lg:w-1/2">
            <div className="w-full">
              <input
                type="number"
                name="phone"
                value={body.phone}
                className="rounded-xl px-5 py-1 bg-transparent border border-[#545454] w-full"
                placeholder="Isi No Telepon / HP Anda"
                onChange={(e) => {
                  setBody({ ...body, phone: e.target.value });
                  setError({ ...error, phone: "" });
                }}
              />
              {error.phone && (
                <div className="text-[#C01C30] pt-2 text-sm text-left">
                  {error.phone}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-5 py-2">
          <input
            type="text"
            name="subject"
            value={body.subject}
            className="rounded-xl px-5 py-1 bg-transparent border border-[#545454] w-full"
            placeholder="Isi Subject Anda"
            onChange={(e) => {
              setBody({ ...body, subject: e.target.value });
              setError({ ...error, subject: "" });
            }}
          />
        </div>
        {error.subject && (
          <div className="text-[#C01C30] pb-2 text-sm text-left">
            {error.subject}
          </div>
        )}
        <div className="py-2">
          <textarea
            type="text"
            name="message"
            value={body.message}
            className="rounded-xl px-5 py-1 bg-transparent border border-[#545454] w-full h-[10vh]"
            placeholder="Isi Message Anda"
            onChange={(e) => {
              setBody({ ...body, message: e.target.value });
              setError({ ...error, message: "" });
            }}
          ></textarea>
          {error.message && (
            <div className="text-[#C01C30] pb-2 text-sm text-left">
              {error.message}
            </div>
          )}
        </div>
        <div className="mb-5">
          {showAlert && alert && (
            <div className="text-green-600 !-mt-1 text-sm text-left">
              {alert}
            </div>
          )}
        </div>
        <div className="mt-1 text-left">
          <button
            className="bg-[#dbbc42] border border-[#dbbc42] py-2 px-10 text-white font-['Work-Sans-Bold'] hover:bg-transparent hover:border-[#dbbc42] hover:text-[#dbbc42] focus:outline-none"
            disabled={loadForm}
          >
            {loadForm ? (
              <div className="flex">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-200 animate-spin dark:text-white fill-[#dbbc42] mr-3"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                Tunggu...
              </div>
            ) : (
              "Kirim"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
