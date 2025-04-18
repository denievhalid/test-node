export interface Database<> {
  connect(): Promise<void>;
  getCollection(name: string): Promise<any>;
  listDatabases: () => Promise<Array<any>>;
  disconnect(): Promise<void>;
  watch: (collection: string, pipeline?: any[], options?: any) => any;
}
