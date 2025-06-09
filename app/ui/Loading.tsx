interface LoadingProps {
  message: string;
}

export default function Loading({ message }: LoadingProps) {
  return (
    <div role="alert" className="alert alert-info alert-soft w-lg">
      <span>{message}</span>
    </div>
  );
}
