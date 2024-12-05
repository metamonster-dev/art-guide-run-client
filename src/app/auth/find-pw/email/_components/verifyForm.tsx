interface FindPwVerifyFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const FindPwVerifyForm = ({ onSubmit, inputRef }: FindPwVerifyFormProps) => {
  return (
    <form id="verifyForm" onSubmit={onSubmit}>
      <div className="input_list_area gap_24 pt_40">
        <div className="label_input_area">
          <label htmlFor="verify_num" className="label">인증번호 입력</label>
          <input
            type="text"
            name="verify_num"
            id="verify_num"
            className="input"
            placeholder="인증번호를 입력해 주세요"
            ref={inputRef}
          />
          <div className="timer_area">
            <p>남은 시간 <span id="time_text">04:59</span></p>
            <button type="button">재발송</button>
          </div>
          <span className="error_msg d_none">
            입력하신 인증번호가 올바르지 않습니다. 다시 확인해주세요.
          </span>
        </div>

        <button
          type="submit"
          className="btn btn_style01 btn_size_52"
        >
          인증
        </button>
      </div>
    </form>
  );
};

export default FindPwVerifyForm;
