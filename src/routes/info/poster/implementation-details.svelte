<script lang='ts' context='module'>
	export const prerender = true;
</script>

<script lang='ts'>
	import graph1 from "../../assets/graphics/DataProcessing1.svg";
	import graph2 from "../../assets/graphics/DataProcessing2.svg";
</script>

<svelte:head>
	<title>E&sup2;G | Implementation Details</title>
</svelte:head>

<div class='section'>
	<h1 class='section__title'>Software</h1>
	<div class='section--sub'>
		<h1 class='section--sub__title'>PicoScope Streaming</h1>
		<div class='section--sub__content'>
			<p>
				All the data is gathered from the Picoscope using the amazing open source
				pico-sdk crate from Meaty Solutions. It’s a set of high-level, high performance, and gapless bindings and
				wrappers that’s driver and platform agnostic. We built in a startup CLI to find the picoscope, set speed,
				voltages and channels, and the sdk configures and sets up the Picoscope which then starts sending data every
				~100ms to an event listener. This allows us to simply create a new thread to start the data processing.
			</p>
		</div>
	</div>
	<div class='section--sub'>
		<h1 class='section--sub__title'>Data Processing</h1>
		<div class='section--sub__content'>
			<p>
				Currently all we have is an stream of raw data points which we need to do 3 operations on to split into an clean
				set of virtual channels:
			</p>
			<ul>
				<li>
					Find pulses from arduino
					<ul>
						<li>Take find all the data points that are outside of the range that the amplifiers are tuned to produce
						</li>
						<li>Block together the sync pulse data points, and throw out any out of place</li>
						<li>Create vector of center of Sync pulses</li>
					</ul>
				</li>
				<li>
					Use synchronisation pulses to estimate where the center of the virtual channel locations are going to be
					<ul>
						<li>Find the difference between the last sync pulse next sync pulse</li>
						<li>Use difference to create a vector of pointers to virtual channels</li>
					</ul>
				</li>
				<li>
					Take an average of the tertile of the estimated virtual channel range
					<ul>
						<li>
							Iterate over virtual channel pointers and create a slice of the tertile (middle third) of the virtual
							channel
						</li>
						<li>Take a mean or mode depending on the data range.</li>
					</ul>
				</li>
			</ul>
			<p>
				Once processed, the state mutex is unlocked and the vector of virtual channels (map of channel id’s to f64
				data points) is moved over, and the thread terminates.
			</p>
		</div>
	</div>

	<div class='section--sub'>
		<h1 class='section--sub__title'>Exporting and Visualization</h1>
		<div class='section--sub__content'>
			<img src={graph1} alt='Data from the PicoScope' class='right'>
			<p>
				Because of the amount of data, we can’t keep everything in ram, so once we have a second of data, we start the
				next phase of processing. In the current state of the program, this means that we only save this to an CSV in a
				folder, for the Jupyter Notebooks to use for visualization and debugging purposes. But this is also designed to
				hook in any post processing, in particular FFT (Fast Fourier Transform).
			</p>
			<img src={graph2} alt='Data from the PicoScope' class='right'>
			<p>
				The current visualizations are done in Jupyter Notebooks (Interactive Ipython Notebook) because it’s not
				realtime, allowing for far more leniency on processing time.
			</p>
		</div>
	</div>
	<div class='section--sub'>
		<h1 class='section--sub__title'>User Interfaces</h1>
		<div class='section--sub__content'>
			<p>
				We built in two interfaces for development and testing, a CLI and a webapp. The web app is currently disablebed
				because it wasn’t able to keep up with the raw data stream, and hasn’t been reimplemented with the newer
				processed data API’s. The CLI is still operational and is used to configure the picoscope, start/stop the
				recording process, and gain insights into performance and data errors in real time. The Webapp is the planned
				final interface, but less applicable with the current debugging.
			</p>
		</div>
	</div>
</div>
<div class='section'>
	<h1 class='section__title'>Hardware</h1>
	<div class='section--sub'>
		<h1 class='section--sub__title'>Headset</h1>
		<div class='section--sub__content'>
			<p>
				For our headset, we went with the safe option of using an almost off the shelf
				headset: OpenBCI ul-tracortex Mark IV. We printed the frame in two halves on a Formbot TRex 3.0 and purchased a
				set of probes (20 probes, and some fillers for comfort). We then assembled the headset, placing the probes in
				accordance with the 10-20 system.
			</p>
		</div>
	</div>
	<div class='section--sub'>
		<h1 class='section--sub__title'>Circuit in detail</h1>
		<div class='section--sub__content'>
			<p>
				The design at its core is a microcontroller controlling dual de-multiplexers, one connected to +5v, the other
				connected to ground, which selectively powers one amplifier at a time. The amplifiers just output onto a shared
				bus which feeds into the input feed of the oscilloscope, along with the synchronisation pulse from the
				microcontroller once it has cycled through the whole set of probes.
			</p>

			<p>
				Separating the amplifiers into rows of positives and columns of negatives and assigning each row/column to a
				channel on their respective multiplexer, allows us to selectively enable one amplifier at a time by selecting a
				specific channel on each multiplexer, completing the circuit for and thus powering only one amplifier at a
				time.
			</p>
		</div>
	</div>
</div>

<style lang='scss'>
  @use "../../assets/style/poster-content" with (
		$color: var(--blue)
	);
</style>