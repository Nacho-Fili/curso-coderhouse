import {useState} from "react";
import {useHistory} from "react-router";

export default function useForm(fields, redirectTo) {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const history = useHistory();

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
          if (redirectTo) {
            history.push(redirectTo);
          }
        });
      else setIsLoading(false);
    } else {
      setErr(errors);
      setIsLoading(false);
    }
  };

  return {handleSubmit, isLoading, err};
}
