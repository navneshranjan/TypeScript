interface greetProps {
  name: string;
  isLoggedIn: boolean;
  messages?: number; //optionam props
}

export const Greet = (props: greetProps) => {
  const { messages = 0 } = props; // default value if messages is not passed as props in parent component
  return (
    <div>
      <h2> {props.isLoggedIn ? ` Welcome ${props.name}` : `please log in`}</h2>
      <h2>{`you have ${messages} messages`}</h2>
    </div>
  );
};
