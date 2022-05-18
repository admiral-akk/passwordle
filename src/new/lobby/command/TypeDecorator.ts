export function AddTypeString<
  T extends {new (...args: any[]): {}},
  LobbyCommand
>(templateType: string): Function {
  return (constructor: T) => {
    return class extends constructor {
      type = templateType;
    };
  };
}
