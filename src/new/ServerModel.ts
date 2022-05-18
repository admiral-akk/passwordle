import {PlayerId} from '../structs/PlayerId';

export abstract class ServerModel<ClientModelType> {
  clientModels: Record<PlayerId, ClientModelType> = {};
}
