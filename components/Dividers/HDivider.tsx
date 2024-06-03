export default function HDivider({ classes = "" }: { classes?: string }) {
  return (
    <div
      className={`border-b-gray-100 border-b-[1px] my-8  ||  ${classes}`}
    ></div>
  );
}
