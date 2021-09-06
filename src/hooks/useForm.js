import {useState} from "react";

export default function useForm(fields) {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = (callback) => {
    setIsLoading(true);
    setErr("");
    const errors = [];

    fields.forEach((field) => {
      !field.validate() && errors.push(field.errorMessage);
    });

    if (errors.length === 0) {
      if (callback)
        callback().then(() => {
          setIsLoading(false);
        });
      else setIsLoading(false);
    } else {
      setErr(errors);
      setIsLoading(false);
    }
  };

  return {handleSubmit, isLoading, err};
}
