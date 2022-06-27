interface greetProps {
  name: string;
  isLoggedIn: boolean;
  messages: number;
}

export const Greet = (props: greetProps) => {
  return (
    <div>
      <h2> {props.isLoggedIn ? ` Welcome ${props.name}` : `please log in`}</h2>
      <h2>you have {props.messages} messages</h2>
    </div>
  );
};
