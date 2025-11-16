import {
    Button,
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

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
                        <TimelineTime>May 2024 - Nov. 2025</TimelineTime>
                        <StyledTimelineTitle>Website Developer</StyledTimelineTitle>
                        <TimelineTitle className="text-grey-500 dark:text-grey-700 font-light italic">CQ Partners</TimelineTitle>
                        <StyledTimelineBody>
                            Designed, developed, and maintained customer-branded websites and internal web applications to enhance digital presence and user experience.
                        </StyledTimelineBody>
                        <StyledTimelineBody>
                            Optimized website and application performance through efficient coding practices and troubleshooting techniques.
                        </StyledTimelineBody>
                        <StyledTimelineBody>
                            Utilized PHP, HTML5, CSS, JavaScript/jQuery, and MySQL in daily development workflows.
                        </StyledTimelineBody>
                        <StyledTimelineBody>
                            Responded to client requests with timely, creative web solutions tailored to individual business needs.
                        </StyledTimelineBody>
                        <StyledTimelineBody>
                            Applied knowledge of SEO best practices and web standards to support clients’ digital marketing efforts.
                        </StyledTimelineBody>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelinePoint icon={HiCalendar} />
                    <TimelineContent>
                        <TimelineTime>Feb. 2023 - May 2024</TimelineTime>
                        <StyledTimelineTitle>Data Analyst </StyledTimelineTitle>
                        <TimelineTitle className="text-grey-500 dark:text-grey-700 font-light italic">Nex Level Networks</TimelineTitle>
                        <StyledTimelineBody>
                            Planned and developed a verification system used by over hundreds students using PHP, Python, and SQL.
                        </StyledTimelineBody>
                        <StyledTimelineBody>
                            Managing websites developed using the LAMP (Linux, Apache, MySQL, PHP) stack and WordPress.
                        </StyledTimelineBody>
                        <StyledTimelineBody>
                            Optimized SEO for websites which has led to 20-30% increases in monthly traffic.
                        </StyledTimelineBody>
                        <StyledTimelineBody>
                            Collaborated directly with clients to plan and build custom websites, ensuring alignment with their requirements.
                        </StyledTimelineBody>
                        <StyledTimelineBody>
                            Created and managed virtual Linux servers for clients, ensuring efficient and reliable hosting solutions.
                        </StyledTimelineBody>
                        <StyledTimelineBody>
                            Provided remote IT troubleshooting support for clients, resolving issues efficiently from the help desk.
                        </StyledTimelineBody>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelinePoint icon={HiCalendar} />
                    <TimelineContent>
                        <TimelineTime>Aug. 2022 - Nov. 2022</TimelineTime>
                        <StyledTimelineTitle>Software Engineer, Intern </StyledTimelineTitle>
                        <TimelineTitle className="text-grey-500 dark:text-grey-700 font-light italic">M.S. Hall + Associates </TimelineTitle>
                        <StyledTimelineBody>
                            Modernized legacy code by refactoring classes for improved object-oriented design.
                        </StyledTimelineBody>
                        <StyledTimelineBody>
                            Set up and conducted PHPUnit tests for all new hospital projects to ensure robust code quality.
                        </StyledTimelineBody>
                        <StyledTimelineBody>
                            Wrote and tested SQL queries to compute financial processes and standardize values across tables.
                        </StyledTimelineBody>
                        <StyledTimelineBody>
                            Developed PHP scripts to clean and format raw hospital data for seamless integration into the codebase.
                        </StyledTimelineBody>
                    </TimelineContent>
                </TimelineItem>

            </Timeline>
        </>
    );
};





export default Experience
