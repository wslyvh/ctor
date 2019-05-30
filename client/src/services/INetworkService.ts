export interface INetworkService {
	GetProvider(): Promise<string | null>;
	GetAccounts(): Promise<string[]>;
}
