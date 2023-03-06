import { IResourceComponentsProps, GetListResponse } from "@pankod/refine-core";
import { AntdInferencer } from "@pankod/refine-inferencer/antd";

export const DoctorsList: React.FC<IResourceComponentsProps<GetListResponse<{}>>> = () => {
    return <AntdInferencer />;
};
