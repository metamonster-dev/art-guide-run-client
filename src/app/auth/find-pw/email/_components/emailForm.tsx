interface FindPwEmailFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FindPwEmailForm = ({ onSubmit }: FindPwEmailFormProps) => {
  return (
    <form id="sendEmailForm" onSubmit={onSubmit}>
      <div className="input_list_area gap_24">
        <div className="label_input_area">
          <label htmlFor="email" className="label">이메일 정보</label>
          <input
            type="text"
            name="email"
            id="email"
            className="input"
            placeholder="이메일을 입력해 주세요"
          />
        </div>

        <button type="submit" className="btn btn_style01 btn_size_52">
          인증번호 전송
        </button>
      </div>
    </form>
  );
};

export default FindPwEmailForm;
