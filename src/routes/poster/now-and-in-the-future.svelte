<script lang='ts' context='module'>
	export const prerender = true;
</script>

<script lang="ts">
    import smallScaleAmpMultiTesting from "../../assets/images/smallScaleAmpMultiTesting.jpg";
    import headsetWiringDiagram from "../../assets/images/headsetWiringDiagram.png";
</script>

<div class="title">Now and in the Future</div>

<div class="section">
	<h1 class="section__title">Prototype Plans</h1>
	<h2>Proof of Concept</h2>

	<p>
		This is a sample of the planned parts laid out on a breadboard which is being used for testing
		and evaluating designs and parts. This design only has 4 inputs, which means it does not take
		full advantage of the concept, a s the number of inputs is equal to the channel counts (2
		Positive, 2 Negative, 4 inputs, vs aka 4 Pos, 4 Neg, 16 inputs).
	</p>
	<p>
		Here is a video showing the tunning process to get the amplifiers into a state where they are sensitive to the correct voltages:
	</p>
	<div class="intrinsic-container r16x9">
		<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1b9_V4YS1Q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>

	<p>Rough Specs:</p>
	<ul>
		<li>
			Arduino Due Controller
			<ul>
				<li>Hugely expensive and over the top, but very reliable vus good for testing</li>
				<li>
					The code also supports esp8266, which is roughly 0.5% the cost of the arduino due, but
					also less reliable for testing, and more weird overlapping pins.
				</li>
			</ul>
		</li>
		<li>
			Two 16 channel multiplexers
			<ul>
				<li>Some ones we were going to use later on</li>
			</ul>
		</li>
		<li>
			Four random AD620’s (instrumentation amplifier)
			<ul>
				<li>Smallest amount possible while still switching channels on both amplifiers.</li>
			</ul>
		</li>
	</ul>
	<h2>Prototype - Mounting to a headset</h2>

	<p>
		This is the step up that uses the controller board from the previous proof of concept, and
		mounts it to the OpenBCI headset, to test some of the advantages of the concept. This design
		maxes out the OpenBCI headset to the full 20 Probes (4 beyond the official max). This uses 5
		groups of probes where each member of a group is on a different “chain line”.
	</p>
	<p>
		<img class="large" src={headsetWiringDiagram} alt="Headset Wiring Diagram, showing the 20 probes being broken up into 5 groups with 4 lines running through them, making a grid of probes." title="Headset Wiring Diagram, showing the 20 probes being broken up into 5 groups with 4 lines running through them, making a grid of probes." />
	</p>
	<p>Rough Specs:</p>
	<ul>
		<li>
			Arduino Due Controller
			<ul>
				<li>Hugely expensive and over the top, but very reliable vus good for testing</li>
				<li>
					The code also supports esp8266, which is roughly 0.5% the cost of the arduino due, but
					also less reliable for testing, and more weird overlapping pins.
				</li>
			</ul>
		</li>
		<li>
			Two 16 channel multiplexers
			<ul>
				<li>Some ones we were going to use later on</li>
			</ul>
		</li>
		<li>
			20 Dry Electrodes
			<ul>
				<li>Upgraded to Open BCI’s better Comb Electrodes.</li>
			</ul>
		</li>
		<li>
			10 Comfort Placeholders
			<ul>
				<li>These help support the weight of the headset and reduce pressure on the probes.</li>
			</ul>
		</li>
		<li>
			20 AD620’s (instrumentation amplifier) directly attached to the probes
			<ul>
				<li>Smallest amount possible while still switching channels on both amplifiers.</li>
			</ul>
		</li>
	</ul>
	<h2>Prototype - Redesigned for use</h2>

	<p>
		Once the initial prototype is done, in the best of worlds it’s still not very durable or
		actually able to be used, and away from excessive testing parts, to upgrade by downgrading the
		parts.
	</p>
	<p>In Particular, we would like to:</p>
	<ul>
		<li>Swap AD620 modules for custom printed boards that embed into the top of the probe body.</li>
		<li>
			Replace the expensive overpowered Picoscope 2207 for a smaller one channel Data Acquisition
			box
		</li>
		<li>Experiment with faking a larger probe count to find bottlenecks.</li>
		<li>Modify the OpenBCI design to allow for better cable management.</li>
	</ul>
</div>
<div class="section">
    <h1 class="section__title">Current State</h1>


    <p>
    The current state of the project is that it is still very much in the “proof of concept” stage. The foundations of the software side are mostly complete and are being used to run tests and gather objective data, which is being used to slowly build up the prototype hardware. Said hardware is still in the testing phase/bug fixing phase before being scaled up to the first prototype.
    </p>
    <p>
    The headset is being developed concurrently with 20 probes and will have the controller board mounted to it.
    </p>
    <img class="large" alt="Desk testing some Amplifiers with the multiplexers." src={smallScaleAmpMultiTesting} title="Desk testing some Amplifiers with the multiplexers."/>
</div>

<style lang="scss">
	@use "../../assets/style/poster-content" with (
        $color: var(--yellow),
    );
</style>
