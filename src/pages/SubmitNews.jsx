import { InputField } from "../components/InputField";

export function SubmitPage({ addNews }) {
    return (
        <div className="submit-page-main">
            <InputField addNews={addNews} />
        </div>
    );
}

