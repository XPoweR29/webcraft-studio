import { Wrapper } from "./components/Wrapper";
import { useBreakpoints } from "./hooks/useBreakpoints";

export const App = () => {
	const {breakpoint} = useBreakpoints();

	return (
		<>
				<Wrapper>
					<h1>WebCraf tSTUDIO</h1>
					<hr />
					<br />
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
						aspernatur ipsa cumque eius aliquid necessitatibus. Illo
						reprehenderit iste nam delectus culpa quas aspernatur. Neque
						delectus officia molestias quasi, similique laudantium omnis
						inventore aut aperiam fuga consequatur id perspiciatis rerum quod
						illo exercitationem commodi accusantium suscipit? Nostrum odit optio
						doloribus reprehenderit dolor blanditiis odio minima quibusdam, cum
						consectetur suscipit delectus repudiandae! In ab nemo, qui debitis
						nostrum vitae eum nam asperiores, nulla non molestias itaque, eius
						voluptatem reprehenderit. Minus, provident sed.
					</p>

                    {breakpoint.lg&&<h1>BIG SIZE BRO!</h1>}
				</Wrapper>
		</>
	);
};
