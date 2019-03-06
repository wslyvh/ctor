import React from "react";

interface IContractFunctionProps {
    functionObject: any;
    type: string;
}

const ContractFunction: React.SFC<IContractFunctionProps> = (props) => {
    let classType = "alert alert-primary";
    let badgeType = "badge badge-primary";
    let showBadge = true;

    let name = props.functionObject.name;
    const properties = props.functionObject.inputs;

    switch (props.type) {
        case "constructor":
            classType = "alert alert-secondary";
            badgeType = "badge badge-primary";
            showBadge = false;

            name = "constructor";
            break;

        case "function":
            classType = "alert alert-success";
            badgeType = "badge badge-success";
            break;

        case "event":
            classType = "alert alert-warning";
            badgeType = "badge badge-warning";
            break;
    }

    return (

        <div className={classType} role="alert">
            { showBadge && <span className={badgeType}>{props.type}</span> }
            <strong> {name} </strong>

            { properties.map((input: any, index: any) => {
                return (
                    <small key={index}>{input.name} ({input.type}) &nbsp;</small>
                );
            })}
        </div>
    );
};

export default ContractFunction;
