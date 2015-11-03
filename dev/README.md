
#The update time is slow
check how many messages are being sent,
and if there is a way to optimize the number of messages sent


#Currently
There is a delay; was a delay between the machines

Correction, there is no delay, but in fact the machine's ticks are slow,
so then when the person moves the mouse arround, it accelerates the
process of the movement of the position.

#Plan
Instead of calculating the payoffs at each tick, calculate them when
someone clicks and the point is set. (When point is set, disable click)

create a hoverflot on top of the play one and hoverplot event on it

maybe don't need to create a new flot, but isolate the values plotted
Hover is : this.playData[3].data
Look through : setPositions() : where the values of the hover positions are set
               setCurve()     : not sure. but appearently it sets the curves.
                                get min values and puts in new data.
               loadData()     : plots the new values to the two graphs.
			   no need to change, possibly just graph the playgraph.

#Notes
the hover tooltips aren't through flot, they are generated and put on the graph.
Playdata[2] is the data used for hover


#Config file
groups : not used.
grouping : okay.
roundDuration inSeciotns : stay.
showpayoff : always true.
averagepayoff : fine if it breaks.
toppayoff : fine if it breaks.
subjectPositions : stay. just in case. numberofplayers unit array. check.
min/maxPos : keep (x-axis)
min/maxPay : keep (y-axis)
alphaAutomation : [constant, at time, starting level]
betaAutomation : [constant, at time, starting level]
minBeta : the 'full' on the penalty bar.
hideLabel : not needed. always hide.
hideOtherPlayers : keep, not prioarity.
saturateAtZero : not going to use.
displayInstruction : quiz in the beginning. for debug purposes.
hideTimer : only because of issues for clock. for debug purposes.
valuable to get to work.
interpolationRate : speedlimit. higher is faster
