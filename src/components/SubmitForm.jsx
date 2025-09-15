import { useState } from "react";
import { saveNews } from "../localStorageUtil";
import "../styling/submitform.css";
import { toast } from "react-toastify";

export function SubmitForm({ addNews }) {	
	const [formData, setFormData] = useState({
		title: "",
		author: "",
		content: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			id: Math.floor(Math.random() * 100000),
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.title.trim() || !formData.content.trim()) {
			alert("cant leave fields empty");
			return;
		}

		const newNews = {
			...formData,
			id: Math.floor(Math.random() * 100000),
			date: new Date(Date.now()).toLocaleString("sv-SE").slice(0, 10),
		};

		addNews(newNews);
		toast("Get silly");
		setFormData({
			title: "",
			author: "",
			content: "",
		});
	};
	return (
		<div className="submit-page-field">
			<form onSubmit={handleSubmit}>
				<div className="submit-page-title">
					<label htmlFor="title">Title</label>
					<input
						name="title"
						type="text"
						value={formData.title}
						onChange={handleChange}
					/>
				</div>
				<div className="submit-page-author">
					<label htmlFor="author">Author</label>
					<input
						name="author"
						type="text"
						value={formData.author}
						onChange={handleChange}
					/>
				</div>
				<div className="submit-page-content">
					<label htmlFor="content">Content</label>
					<textarea
						name="content"
						id="content"
						value={formData.content}
						rows="6"
						onChange={handleChange}
					>
					</textarea>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
