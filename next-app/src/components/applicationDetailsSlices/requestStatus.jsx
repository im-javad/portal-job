import { MdClearAll } from "react-icons/md";

const RequestStatus = ({ status, displayed }) => {
  return (
    <div className="request-status lg:col-span-7 lg:mb-14">
      <div className="header flex items-center mb-4">
        <i className="text-2xl text-appColor_3">
          <MdClearAll />
        </i>
        <h2 className="text-xl ms-2 text-appColor_1 font-bold">
          Application status
        </h2>
      </div>
      <div className="content">
        <div className="custom-steps-part">
          <ul className="custom-steps flex flex-col">
            <div className="grid grid-cols-12">
              <div className="col-span-1">
                <li className="custom-step">1</li>
              </div>
              <div className="col-span-11 ms-3 flex flex-col">
                <strong className="text-appColor_1">Posted</strong>
                <span>
                  Your resume has been sent to the employer, but the employer
                  has not yet viewed the resume. After viewing the situation
                  will change
                </span>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-1">
                <li className="custom-step connect">2</li>
              </div>
              <div className="col-span-11 ms-3 flex flex-col">
                {displayed ? (
                  <>
                    <strong>Reviewed</strong>
                    <span>
                      Your resume has been seen by the employer, but the
                      employer has not yet determined a specific status for your
                      resum.
                    </span>
                  </>
                ) : (
                  <>
                    <strong>Not Reviewed</strong>
                    <span>
                      Your resume has been sent to the employer, but the
                      employer has not seen it yet and it is in the queue of
                      resumes
                    </span>
                  </>
                )}
              </div>
            </div>
            {status === "Rejected" && (
              <div className="grid grid-cols-12">
                <div className="col-span-1">
                  <li className="custom-step connect">3</li>
                </div>
                <div className="col-span-11 ms-3 flex flex-col">
                  <strong>Rejected</strong>
                  <span>
                    Unfortunately, your resume did not meet the employer's
                    requirements and was not accepted. never give up
                  </span>
                </div>
              </div>
            )}
            {status === "Accepted" && (
              <div className="grid grid-cols-12">
                <div className="col-span-1">
                  <li className="custom-step connect">3</li>
                </div>
                <div className="col-span-11 ms-3 flex flex-col">
                  <strong>Accepted</strong>
                  <span>
                    Your resume has been accepted by the employer and he will
                    contact you or send you an email in the coming days
                  </span>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RequestStatus;
