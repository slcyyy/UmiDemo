/*
 * @Date: 2021-04-09 15:29:32
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-04-29 20:36:05
 * @description 左侧的拖拽数据
 */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'umi';
import { propertyList } from '../../../data';
import { Input, Button, Collapse, Upload, message } from 'antd';
import {
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import styles from '../../../styles.less';
import UnitName from '@/assets/img/virtual-card/unit_name.svg';
import PerCode from '@/assets/img/virtual-card/percode.svg';
import UnitInUse from '@/assets/img/virtual-card/unit_in_use.svg';
import Name from '@/assets/img/virtual-card/name.svg';
import Major from '@/assets/img/virtual-card/major.svg';
import Identity from '@/assets/img/virtual-card/identity.svg';
import Sex from '@/assets/img/virtual-card/sex.svg';
import IDPhoto from '@/assets/img/virtual-card/id_photo.svg';
import DepartmentName from '@/assets/img/virtual-card/department_name.svg';
import UpperDepartName from '@/assets/img/virtual-card/upper_depart_name.svg';
import TimeInSchool from '@/assets/img/virtual-card/time_in_school.svg';
import CardInOpen from '@/assets/img/virtual-card/card_in_open.svg';
import CardInUnValid from '@/assets/img/virtual-card/card_in_unvalid.svg';
import QrCode from '@/assets/img/virtual-card/qrcode.svg';
import DIYText from '@/assets/img/virtual-card/diy_text.svg';

const VELeft: React.FC<{}> = () => {
  interface dragList {
    propertyId: number;
    label: string;
    iconName: string;
    componentId: string;
  }
  const { Panel } = Collapse;

  const dispatch = useDispatch();
  // cuseSelector((state) => state.editor.componentData);
  const [dragList, setdragList] = useState<dragList[]>([]);
  const [iconList, seticonList] = useState<any>({});

  const [cardLoading, setCardLoading] = useState<boolean>(false);
  const [cardImgUrl, setCardImgUrl] = useState<string | null>(null);
  const [cardFileList, setCardFileList] = useState<any>([]);

  const [logoLoading, setLogoLoading] = useState<boolean>(false);
  const [logoImgUrl, setLogoImgUrl] = useState<string | null>(null);
  const [logoFileList, setLogoFileList] = useState<any>([]);

  useEffect(() => {
    // 左侧拖拽数据
    setdragList(propertyList);
    // 左侧拖拽icon  顺序不可变！对应组件的iconId
    seticonList({
      UnitName,
      PerCode,
      UnitInUse,
      Name,
      Major,
      Identity,
      Sex,
      IDPhoto,
      DepartmentName,
      UpperDepartName,
      TimeInSchool,
      CardInOpen,
      CardInUnValid,
      QrCode,
      DIYText,
    });
  }, []);

  const handleDragStart = (e: any) => {
    // e.persist() v17会被去掉 只有加了才可以在console中看到
    e.dataTransfer.setData('propertyId', e.target.dataset.propertyid);
    e.dataTransfer.setData('componentId', e.target.dataset.componentid);
    e.dataTransfer.setData('label', e.target.dataset.label);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  /**
   * @method 卡片背景上传时检测
   * @param file
   * @returns
   */
  const cardBeforeUpload = (file) => {
    setCardLoading(true);
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('只可上传 JPG/JPEG/PNG图片!');
    }
    const isLt5 = file.size / 1024 <= 500;
    if (!isLt5) {
      message.error('模板图片不可以超过500Kb!');
    }
    if (isJpgOrPng && isLt5) {
      setCardFileList([file]);
      setCardLoading(false);
      let url = URL.createObjectURL(file);
      dispatch({ type: 'editor/saveUrl', payload: { name: 'card', url } });
    }
    return false;
  };

  /**
   * @method 上传卡背景的上传box样式
   */
  const uploadButton = (
    <div style={{ textAlign: 'center' }}>
      {cardLoading ? (
        <LoadingOutlined style={{ color: 'rgba(0,0,0,0.45)' }} />
      ) : (
        <PlusOutlined style={{ color: 'rgba(0,0,0,0.45)' }} />
      )}
      <div style={{ marginTop: 8, color: 'rgba(0,0,0,0.45)' }}>
        图片长宽比建议4:3
      </div>
    </div>
  );

  const logoBeforeUpload = (file) => {
    return false;
  };

  const cardFileRemove = () => {
    setCardFileList([]);
    dispatch({ type: 'editor/saveUrl', payload: { name: 'card', url: '' } });
  };
  // const handleChange = (info) => {
  //   // console.log('info',info,info.file,info.file.status)
  // };
  return (
    <div className={styles.VELeft}>
      <Collapse
        defaultActiveKey={['1', '2']}
        expandIconPosition="right"
        bordered={true}
        ghost={true}
      >
        <Panel header="固定参数" key="1">
          <div className={styles.uploadCard}>
            <p>上传图片</p>
            <Upload
              accept="image/png, image/jpeg, image/jpg"
              listType="text"
              maxCount={1}
              showUploadList={true}
              multiple={false}
              fileList={cardFileList}
              beforeUpload={cardBeforeUpload}
              onRemove={cardFileRemove}
              // onChange={handleChange}
            >
              <div className={styles.cardUploadbox}>
                {cardImgUrl ? (
                  <img
                    src={cardImgUrl}
                    alt="avatar"
                    style={{ width: '100%' }}
                  />
                ) : (
                  uploadButton
                )}
              </div>
            </Upload>
          </div>

          <div className={styles.uploadLogo}>
            <p>上传logo</p>
            <Upload
              accept="image/png, image/jpeg, image/jpg"
              onRemove={() => setLogoFileList([])}
              beforeUpload={logoBeforeUpload}
              fileList={logoFileList}
              multiple={false}
              maxCount={1}
            >
              <Button className={styles.logoBtn}>
                <UploadOutlined /> 浏览文件
              </Button>
            </Upload>
          </div>
          <div className={styles.unitName}>
            <Input
              addonBefore={<img src={UnitName} alt="图标" />}
              placeholder="单位名称"
            />
          </div>
        </Panel>
        <Panel header="非固定参数" key="2">
          <div
            className={styles.componentWrapper}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
          >
            {dragList.map((item, index) => (
              <div
                className={styles.dragChild}
                key={index}
                data-propertyid={item.propertyId}
                data-componentid={item.componentId}
                data-label={item.label}
                draggable
              >
                <Input
                  addonBefore={<img src={iconList[item.iconName]} alt="图标" />}
                  value={item.label}
                  readOnly
                />
                <span></span>
              </div>
            ))}
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default VELeft;
