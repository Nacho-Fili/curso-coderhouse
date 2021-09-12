export default function Address({address}) {
  return <p>{`${address.address}, zip: ${address.zip}`}</p>;
}
