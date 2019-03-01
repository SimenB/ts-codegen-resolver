import { IResolvers } from "./resolver-types";

const resolvers: IResolvers = {
  Event: {
    expanded() {
      return true;
    }
  }
};

export default resolvers;
