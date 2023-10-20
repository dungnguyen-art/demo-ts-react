type GreetProps = {
  name: string;
  age: number;
  gender: boolean;
  face: unknown;
  school: any;
  messageCount?: number
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.gender ? (
        <div>
          <h2>Chao {props.name}, ban co 5 Dot trong tai khoan!</h2>
          <h2>
            Tuoi cua {props.name} la {props.age} va gt {props.gender}!
          </h2>
          <h2>
            Mot so thong tin khac {props.face} la {props.school}!
          </h2>
        </div>
      ) : (
        "welcome guys"
      )}
    </div>
  );
};
