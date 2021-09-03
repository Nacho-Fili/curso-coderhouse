import {useState} from "react";
import salesService from "../services/salesService";

export default function useForm(fields) {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = (e, transaction, callback) => {
    setIsLoading(true);
    setErr("");

    let validFields = 0;

    fields.forEach((field) => {
      validFields += field.validate() ? 1 : 0;
    });

    if (validFields === fields.length) {
      return salesService.create(transaction).then((id) => {
        setIsLoading(false);
        callback(id);
      });
    } else {
      const err = new Error("Fields must contain at least one character");
      setErr(err);
      setIsLoading(false);
      return Promise.reject(err);
    }
  };

  return {handleSubmit, isLoading, err};
}
