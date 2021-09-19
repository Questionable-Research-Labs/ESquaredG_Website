<script lang='ts'>
	import is from '../../assets/graphics/IndustryStandard.svg';
	import diy from '../../assets/graphics/DIYSingleChannel.svg';
	import slna from '../../assets/graphics/MultiplexSignal.svg';
</script>

<h1 class='title'>Problem and Solutions</h1>

<div class='section'>
	<h1 class='section__title'>Discovery of the Problem</h1>
	<div class='section__content'>
		<p>
			We like playing with integrating real world electronics into games and we wanted to experiment
			with EEG headsets, from knowing only the basic fundamentals. After some research, we came up with the ideal specs
			of: 8-16 channels, dry electrodes, and modifiable.
		</p>
		<p>
			We started looking into what made the headsets so expensive,
			and we came up with two key inflated parts of the cost: The probes themselves (~$40 per probe), which we believe
			is primarily because of the very
		</p>
	</div>
</div>

<div class='section'>
	<h1 class='section__title'>Derived Problem Statement</h1>
	<div class='section__content'>
		<p>
			The current limiting factor to current EEG technology is the inefficient use of expensive
			analog to digital converters, making large probe counts virtually impossible due to the cost.
		</p>
	</div>
</div>

<div class='section'>
	<h1 class='section__title'>Existing Solutions</h1>
	<div class='section--sub'>
		<h1 class='section--sub__title'>Industry Standard</h1>
		<div class='section--sub__content'>
			<img class='right' src={is} alt='Diagram of industry standard approach for EEG'>
			<p>
				The industry has thus far been restricted to enterprise/research use cases, which means that they just bite the
				bullet and spend whatever it costs to get the headset they need. This means that they have a direct line from
				the probe to an A->D converter on the controller board.
			</p>
			<h2>Positives</h2>
			<ul>
				<li>Simple to engineer</li>
				<li>Least possible chance for noise</li>
				<li>Usually comes with software support</li>
				<li>Almost sane pricing in small probe counts (&lt;$1000)</li>
			</ul>
			<h2>Negatives</h2>
			<ul>
				<li>Very wasteful in parts, meaning as probe count increases, so does the cost, linearly</li>
			</ul>
		</div>
	</div>

	<div class='section--sub'>
		<h1 class='section--sub__title'>DIY Microcontroller Method</h1>
		<div class='section--sub__content'>
			<img src={diy} alt='DIY Microcontroller Method Diagram'>
			<p>
				This is the alternative method. It uses amplifiers connected to general purpose microcontrollers and their
				embedded analog inputs, for one or two channels. The most common microcontroller of choice is the arduino uno or
				similar. These aren’t designed to be scientific devices, but rather as an introduction to EEG and can do basic
				detection.
			</p>
			<h2>Positives</h2>
			<ul>
				<li>Very cheap due to mass production of microcontrollers.</li>
				<li>Great as an introduction to the technology</li>
			</ul>
			<h2>Negatives</h2>
			<ul>
				<li>Not very accurate (Noisy and low resolution)</li>
				<li>Low channel counts mean reduced precision</li>
			</ul>
		</div>
	</div>
</div>

<div class='section'>
	<h1 class='section__title'>Opportunity</h1>
	<div class='section__content'>
		<p>
			We saw an opportunity to improve in this space by reducing the number of expensive A->D
			converters. After a bit of deliberation, we decided to bring the concept that cameras use to EEG. By having a
			switching system that can quickly iterate through all of the probes in use, faster than the frequency of
			brainwaves,
			300Hz, thereby allowing us to use only one really expensive A -> D converter that runs at a high speed to service
			multiple probes. We came up with some different ways of accomplishing this.
		</p>
	</div>
</div>

<div class='section'>
	<div class='section__title'>Our solutions</div>
	<div class='section--sub'>
		<h1 class='section--sub__title'>Many Probes to Many Multiplexer channels to One A->D
		</h1>
		<div class='section--sub__content'>
			<img src={slna} alt='Many probes with linked signals' class='right'>
			<p>
				This is the simplest way to increase the number of probes. Each probe is mapped directly to its own channel on
				the multiplexer. This does not add much complexity to the design, but it increases the ratio of probes to A->D
				converters to a maximum of 16:1.
			</p>
			<h2>Positives</h2>
			<ul>
				<li>Not much extra complexity</li>
				<li>Dramatically reduces cost</li>
			</ul>
			<h2>Negatives</h2>
			<ul>
				<li>Multiplexers tend have a max of 16 inputs, reducing the theoretical limit of the approach</li>
				<li>Multiplexers could introduce significant noise into the super-low voltage data lines.
				</li>
			</ul>
		</div>
	</div>
	<div class='section--sub'>
		<div class='section--sub__title'>Many Probes to Many Amplifiers to some Multiplexers Channels to One A->D</div>
		<div class='section--sub__content'>
			<p>
				This is the more complicated solution, but with a vastly increased theoretical limit. Instead of using the
				multiplexer to switch between the inputs, it is possible to use it in reverse as a “demultiplexer”, and use it
				to switch amplifiers located directly on the probes. This allows a grid layout to select one probe out of many,
				which means that instead of the other method’s 1:1 multiplexer channel to probe ratio, the multiplexer channel
				count can be calculated with <span class='math'>f(x)→⌈2x⌉</span>, and x is the probe count.
			</p>
			<h2>Positives</h2>
			<ul>
				<li>Multiplexer channels is a exponential falloff as more probes are added</li>
				<li>Dramatically reduces costs</li>
			</ul>
			<h2>Negatives</h2>
			<ul>
				<li>Significantly more complex</li>
			</ul>
		</div>
	</div>
</div>

<div class='section'>
	<h1 class='section__title'>Why we chose to do this</h1>
	<div class='section--sub'>
		<h1 class='section--sub__title'>Implement EEG into our games and tools</h1>
		<div class='section--sub__content'>
			<p>
				We have played around before with implementing external mechanics into games, this kind of like the reverse of
				when we made a horror game with spiders that bite with a tens machine
			</p>
		</div>
	</div>
	<div class='section--sub'>
		<h1 class='section--sub__title'>To learn, explore and play</h1>
		<div class='section--sub__content'>
			<p>
				We always love to learn and try new technologies, and we thought of some fun stuff that we could do with an EEG
				headset, on the AI side of things.
			</p>
		</div>
	</div>
</div>

<style lang='scss'>
  @use "../../assets/style/poster-content" with (
		$color: var(--green)
	);
</style>