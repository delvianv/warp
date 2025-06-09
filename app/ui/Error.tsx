interface ErrorProps {
  message: string;
}

export default function Error({ message }: ErrorProps) {
  return (
    <div role="alert" className="alert alert-error alert-soft w-lg">
      <span>{message}</span>
    </div>
  );
}
