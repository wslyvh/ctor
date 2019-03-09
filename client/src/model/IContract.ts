
export interface IContract {
    Name: string;
    Address: string;
    SourceCode?: string;
    ABI?: string;
    Compiler?: ICompiler;
    ConstructorArguments?: string;
    SwarmSource?: string;
}

export interface ICompiler {
    Name: string;
    Version: string;
}
