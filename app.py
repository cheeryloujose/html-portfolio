from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():

    profile = {
        "name": "Cheery Lou Jose",
        "title": "Aspiring Full Stack Developer",
        "intro": "Hi, I'm",
        "description": "I enjoy building responsive websites, learning web development, and improving my coding skills every day."
    }

    projects = [
    {
        "title": "Personal Portfolio",
        "description": "A responsive portfolio website built using HTML, CSS, JavaScript and Flask.",
        "image": "project1.jpg",

        "tech": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],

        "github": "https://github.com/cheeryloujose/html-portfolio"
    },

    {
        "title": "Coffee Shop Website",
        "description": "A responsive landing page designed for a fictional coffee shop.",
        "image": "project2.jpg",

        "tech": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],

        "github": "https://github.com/cheeryloujose/"
    },

    {
        "title": "Weather App",
        "description": "Weather application using JavaScript and a weather API.",
        "image": "project3.jpg",

        "tech": [
            "HTML",
            "CSS",
            "JavaScript",
            "API"
        ],

        "github": "https://github.com/cheeryloujose/"
    }
]

    certificates = [
    {
        "title": "ML Digital Marketing Agency - SEO Specialist Training",
        "issuer": "ML Digital Marketing Agency",
        "image": "certificate1.jpg"
    },
    {
        "title": "AI SEO Course 2026: From Zero to Page-One Results (AEO, GEO)",
        "issuer": "Udemy - Arun Nagarathanam",
        "image": "certificate2.jpg"
    }
]
    education = [
    {
        "degree": "Bachelor's Degree in Information Technology",
        "school": "Torres Capitol College"
    },
    {
        "degree": "Bachelor's Degree in Secondary Education",
        "school": "Central Mindanao University"
    },
    {
        "degree": "Senior High School",
        "school": "Central Mindanao University"
    }
]

    experience = [
    {
        "role": "SEO Specialist",
        "company": "MLD Marketing",
        "duration": "1 year"
    },
    {
        "role": "ESL Teacher",
        "company": "Woyoungshu",
        "duration": "5 years"
    },
    {
        "role": "Sales Agent",
        "company": "",
        "duration": "2 years"
    },
    {
        "role": "Freelancer",
        "company": "Self-employed",
        "duration": "8 years"
    }
]

    stats = {
        "projects": len(projects),
        "certificates": len(certificates),
        "years_learning": 1,
        "dedication": 100
    }

    return render_template(
        "index.html",
        profile=profile,
        projects=projects,
        certificates=certificates,
        education=education,
        experience=experience,
        stats=stats
    )

if __name__ == "__main__":
    app.run(debug=True)


    