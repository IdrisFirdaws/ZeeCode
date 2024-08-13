import { useState, useEffect } from "react";

const useLessons = (lessonId = null) => {
  const [lessons, setLessons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLessons() {
      try {
        const response = await fetch(
          "https://idrisfirdaws.github.io/ZeeCode-Academy-Lessons/lessons.json"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLessons(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLessons();
  }, []);

  // Return specific lesson if lessonId is provided
  const lesson = lessonId ? lessons[lessonId] : null;

  return { lesson, lessons, loading, error };
};

export default useLessons;
