import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip, Space } from "antd";
import { Collapse } from "antd";

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const dsc = `
 DigitalSky platform requires organisational users to upload documents which are signed using the DSC issued to them. This is required to meet the requirements of self-certification for the uploaded documents. Please refer the below guidelines for obtaining the DSC and signing the documents digitally.

 Documents must be Digitally Signed by the applicant using the DSC issued to organisation.
Wherever applicable, the system requires the document being uploaded, to be digitally signed by the applicant using the DSC issued to organisation. The DSC should be issued to organisation by any of the licensed Certifying Authorities authorized by India’s root CA. List of licensed CA’s can be found at https://cca.gov.in/licensed_ca.html. Even the documents issued to the user in an electronic format and already having a digital signature can also be digitally signed again using the DSC issued to the user. Alternatively, user can also take a print of the documents issued to them in electronic format (example CIN), scan them as pdf and then sign using their DSC as explained above.
DSC suitable for Organisations
All the users registered in the system as organisations should obtain Class 3 DSC issued to organisations. Please ensure that the organisation name to which the DSC is issued should exactly match the name of the organisation being used on DigitalSky platform. This check is done by comparing the O attribute present in the digital certificate.
`;

const Faq = () => {
  return (
    <div className="mt-36 text-center">
      <h1 className="text-[#000000] font-medium text-5xl">
        Frequently Asked Questions
      </h1>
      <p className="text-[#667085] font-normal text-xl mt-5">
        Have questions? We’re here to help.
      </p>
      <div className="search mt-4">
        <Space direction="vertical">
          <Space wrap>
            <Button
              className="w-60 h-10 text-[#667085] text-left"
              icon={<SearchOutlined />}
            >
              Search
            </Button>
          </Space>
        </Space>
      </div>

      {/* ------- This is a collapsible part--------: */}
      <div className="collapsible mt-20 pl-56">
        <Collapse className="w-[800px]" size="large">
          <Panel header="What is DARC and how does it work?" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>

        <Collapse className="w-[800px] mt-8" size="large">
          <Panel header="What is the full form of UAS and its classes?" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>

        <Collapse className="w-[800px] mt-8" size="large">
          <Panel header="What is the categorization of UAS?" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>

        <Collapse className="w-[800px] mt-8" size="large">
          <Panel header="What is UIN?" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>

        <Collapse className="w-[800px] mt-8" size="large">
          <Panel header="What is DAN?" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>

        <Collapse className="w-[800px] mt-8" size="large">
          <Panel header="How much is the fee for UIN?" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>

        <Collapse className="w-[800px] mt-8" size="large">
          <Panel
            header="Where can I lodge my grievance regarding RPAs?"
            key="1"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>

        <Collapse className="w-[800px] mt-8" size="large">
          <Panel
            header="Why do we need to sign the documents Digitally before uploading? How to obtain a Digital Signed Certificate (DSC)?"
            key="1"
          >
            <p>{dsc}</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default Faq;
