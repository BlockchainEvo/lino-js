import Broadcast from './broadcast';
import Query from './query';
import { ITransport, ITransportOptions, Transport } from './transport';

export class LINO {
  private _options: ITransportOptions;
  private _transport: ITransport;
  private _query: Query;
  private _broadcast: Broadcast;

  constructor(opt: ITransportOptions) {
    this._options = opt;
    this._transport = new Transport(opt);
    this._query = new Query(this._transport);
    this._broadcast = new Broadcast(this._transport);
  }

  get query(): Query {
    return this._query;
  }

  get broadcast(): Broadcast {
    return this._broadcast;
  }
}
