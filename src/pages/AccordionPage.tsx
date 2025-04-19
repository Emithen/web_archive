import { Accordion, AccordionItem } from "../components/Accordion";
import BaseTab from "../components/Tab/BaseTab";

const AccordionPage: React.FC = () => {
    return (
        <Accordion>
            <AccordionItem title="항목_1">
                <BaseTab tabs={[ "탭_1", "탭_2", "탭_3" ]}/>
            </AccordionItem>
            <AccordionItem title="항목_2">내용_2</AccordionItem>
            <AccordionItem title="항목_3">내용_3</AccordionItem>
        </Accordion>
    );
};

export default AccordionPage;