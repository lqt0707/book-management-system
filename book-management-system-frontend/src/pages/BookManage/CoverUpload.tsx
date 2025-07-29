import { InboxOutlined } from "@ant-design/icons";
import { message } from "antd";
import Dragger, { DraggerProps } from "antd/es/upload/Dragger";

interface CoverUploadProps {
    value?: string;
    onChange?: Function
}

let onChange: Function;

const props: DraggerProps = {
    name: 'file',
    action: 'http://localhost:3000/book/upload',
    method: 'post',
    onChange(info) {
        const { status } = info.file;
        if (status === 'done') {
            // 从统一响应格式中提取实际的文件路径
            const response = info.file.response;
            if (response && response.success) {
                onChange(response.data);
                message.success(`${info.file.name} 文件上传成功`);
            } else {
                message.error(response?.message || `${info.file.name} 文件上传失败`);
            }
        } else if (status === 'error') {
            message.error(`${info.file.name} 文件上传失败`);
        }
    }
};

const dragger = <Dragger {...props}>
    <p className="ant-upload-drag-icon">
        <InboxOutlined />
    </p>
    <p className="ant-upload-text">点击或拖拽文件到这个区域来上传</p>
</Dragger>

export function CoverUpload(props: CoverUploadProps) {

    onChange = props.onChange!

    return props?.value ? <div>
        <img src={'http://localhost:3000/' + props.value} alt="封面" width="100" height="100"/>
        {dragger}
    </div>: <div>
        {dragger}
    </div>
}