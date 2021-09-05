import {useState} from "react";

export default function useForm(fields) {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = (callback) => {
    setIsLoading(true);
    setErr("");

    let validFields = 0;

    fields.forEach((field) => {
      validFields += field.validate() ? 1 : 0;
    });

    if (validFields === fields.length) {
      callback().then(() => {
        setIsLoading(false);
      });
    } else {
      const err = new Error("Fields must contain at least one character");
      setErr(err);
      setIsLoading(false);
    }
  };

  return {handleSubmit, isLoading, err};
}
