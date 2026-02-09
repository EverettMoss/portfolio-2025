import {
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
} from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

const Experience = () => {
    const StyledTimelineTitle = ({ children, className = "", ...props }) => (
        <TimelineTitle
            className={`text-grey-500 dark:text-grey-700 ${className}`}
            {...props}
        >
            {children}
        </TimelineTitle>
    );

    const StyledTimelineBody = ({ children, className = "", ...props }) => (
        <TimelineBody
            className={`text-grey-500 dark:text-grey-700 ${className}`}
            {...props}
        >
            {children}
        </TimelineBody>
    );

    return (
        <>
            <Timeline>

                <TimelineItem>
                    <TimelinePoint icon={HiCalendar} />
                    <TimelineContent>
                        <TimelineTime>May 2024 – Nov 2025</TimelineTime>
                        <StyledTimelineTitle className="text-lg font-semibold text-black">
                            Website Developer — CQ Partners
                        </StyledTimelineTitle>
                        <StyledTimelineBody>
                            <ul className="mt-2 list-disc pl-5 space-y-1">
                                <li>Designed and maintained customer-branded websites and internal web apps.</li>
                                <li>Improved performance through efficient coding and troubleshooting.</li>
                                <li>Built solutions with PHP, HTML5, CSS, JavaScript/jQuery, and MySQL.</li>
                                <li>Delivered creative, timely solutions aligned to client needs and SEO best practices.</li>
                            </ul>
                        </StyledTimelineBody>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelinePoint icon={HiCalendar} />
                    <TimelineContent>
                        <TimelineTime>Feb 2023 – May 2024</TimelineTime>
                        <StyledTimelineTitle className="text-lg font-semibold text-black">
                            Data Analyst — Nex Level Networks
                        </StyledTimelineTitle>
                        <StyledTimelineBody>
                            <ul className="mt-2 list-disc pl-5 space-y-1">
                                <li>Built a verification system used by hundreds of students with PHP, Python, and SQL.</li>
                                <li>Managed LAMP and WordPress sites, improving SEO and monthly traffic by 20–30%.</li>
                                <li>Collaborated with clients to plan and ship custom websites.</li>
                                <li>Provisioned Linux servers and provided remote IT troubleshooting.</li>
                            </ul>
                        </StyledTimelineBody>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelinePoint icon={HiCalendar} />
                    <TimelineContent>
                        <TimelineTime>Aug 2022 – Nov 2022</TimelineTime>
                        <StyledTimelineTitle className="text-lg font-semibold text-black">
                            Software Engineer Intern — M.S. Hall + Associates
                        </StyledTimelineTitle>
                        <StyledTimelineBody>
                            <ul className="mt-2 list-disc pl-5 space-y-1">
                                <li>Refactored legacy classes to improve object-oriented design.</li>
                                <li>Built PHPUnit test coverage for new hospital projects.</li>
                                <li>Wrote SQL queries and PHP scripts to standardize and clean data.</li>
                            </ul>
                        </StyledTimelineBody>
                    </TimelineContent>
                </TimelineItem>

            </Timeline>
        </>
    );
};





export default Experience
