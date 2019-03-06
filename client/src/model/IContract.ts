
export interface IContract {
    Name: string;
    SourceCode: string;
    ABI: string;
    Compiler: ICompiler;
    ConstructorArguments: string;
    SwarmSource: string;
}

export interface ICompiler {
    Name: string;
    Version: string;
}
